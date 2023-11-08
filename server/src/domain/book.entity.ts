/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

/**
 * A Book.
 */
@Entity('book')
export class Book extends BaseEntity {
    @Column({ name: 'name', nullable: true })
    name: string;

    @Column({ name: 'penerbit', nullable: true })
    penerbit: string;

    @Column({ name: 'author', nullable: true })
    author: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
