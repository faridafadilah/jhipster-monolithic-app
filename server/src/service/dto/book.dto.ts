/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

/**
 * A BookDTO object.
 */
export class BookDTO extends BaseDTO {
    @ApiModelProperty({ description: 'name field', required: false })
    name: string;

    @ApiModelProperty({ description: 'penerbit field', required: false })
    penerbit: string;

    @ApiModelProperty({ description: 'author field', required: false })
    author: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
