import { ApiProperty } from '@nestjs/swagger';

export class InternalErrorResponse {
    @ApiProperty({ example: '500 Internal Server Error', description: 'Server error description.' })
    error: string;
}
