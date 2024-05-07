import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';
import { SearchingOptions } from '../../interfaces/searching-options.interface';

export const SearchingParams = createParamDecorator(
  <EntityType>(
    fields: (keyof EntityType)[],
    ctx: ExecutionContext,
  ): SearchingOptions => {
    const req: Request = ctx.switchToHttp().getRequest();
    const search = req.query.search as string;
    if (!search) {
      return null;
    }

    const searchPattern = /^([a-zA-Z0-9]+):([a-zA-Z0-9_,]+)$/;
    if (!search.match(searchPattern)) {
      throw new BadRequestException('Invalid search parameter');
    }

    const [property, searchString] = search.split(':');
    if (!fields.includes(property as keyof EntityType)) {
      throw new BadRequestException(`Invalid search property: ${property}`);
    }

    return { property, searchString };
  },
);
export { SearchingOptions };
