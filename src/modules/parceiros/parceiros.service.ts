import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CouponEntity } from './coupon.entity';

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(CouponEntity)
    private readonly couponRepository: Repository<CouponEntity>,
  ) {}

  async findAll(): Promise<CouponEntity[]> {
    return await classToPlain(this.couponRepository.find({ where: { isActive: true } })) as CouponEntity[];
  }

  async findOne(id: string): Promise<CouponEntity> {
    const coupon = await this.couponRepository.findOne({ where: { id, isActive: true } });
    if (!coupon) {
      throw new NotFoundException('Cupom não encontrado ou inativo.');
    }
    return coupon;
  }

  async findByCode(code: string): Promise<CouponEntity> {
    const coupon = await this.couponRepository.findOne({ where: { code: code.toUpperCase(), isActive: true } });
    if (!coupon) {
      throw new NotFoundException('Cupom inválido ou expirado.');
    }
    return coupon;
  }

  async create(createCouponDto: Partial<CouponEntity>): Promise<CouponEntity> {
    const existing = await this.couponRepository.findOne({ where: { code: createCouponDto.code?.toUpperCase() } });
    if (existing) {
      throw new ConflictException('Já existe um cupom cadastrado com este código.');
    }

    const newCoupon = this.couponRepository.create({
      ...createCouponDto,
      code: createCouponDto.code?.toUpperCase(),
    });

    return await this.couponRepository.save(newCoupon);
  }

  async update(id: string, updateCouponDto: Partial<CouponEntity>): Promise<CouponEntity> {
    const coupon = await this.findOne(id);
    
    if (updateCouponDto.code) {
      updateCouponDto.code = updateCouponDto.code.toUpperCase();
    }

    Object.assign(coupon, updateCouponDto);
    return await this.couponRepository.save(coupon);
  }

  async remove(id: string): Promise<void> {
    const coupon = await this.findOne(id);
    coupon.isActive = false;
    await this.couponRepository.save(coupon);
  }
}
