import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Tag } from './entities/tag.entity';
import { GetUser } from 'src/common/decorators/requests/get-user.decorator';

@ApiBearerAuth()
@ApiTags('Tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @ApiOperation({ summary: 'Create a new tag' })
  @ApiCreatedResponse({ type: Tag, description: 'Created' })
  @Post()
  async create(
    @Body() createTagDto: CreateTagDto,
    @GetUser('id') userId: number,
  ) {
    return this.tagsService.create(createTagDto, userId);
  }

  @ApiOkResponse({ type: [Tag], description: 'Found' })
  @ApiOperation({ summary: 'Getting a list of tags' })
  @Get()
  async findAll(@GetUser('id') userId: number) {
    return this.tagsService.findAll(userId);
  }

  @ApiOkResponse({ type: Tag, description: 'Found' })
  @ApiOperation({ summary: 'Receiving a tag by its ID' })
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
    @GetUser('id') userId: number,
  ) {
    return this.tagsService.findOne(id, userId);
  }

  @ApiOkResponse({ type: Tag, description: 'Updated' })
  @ApiOperation({ summary: 'Change information about an existing tag' })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTagDto: UpdateTagDto,
    @GetUser('id') userId: number,
  ) {
    return this.tagsService.update(id, updateTagDto, userId);
  }

  @ApiOkResponse({ type: Tag, description: 'Deleted' })
  @ApiOperation({ summary: 'Deleting a tag' })
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @GetUser('id') userId: number,
  ) {
    return this.tagsService.remove(id, userId);
  }
}
