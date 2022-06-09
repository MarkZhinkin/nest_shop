import {MigrationInterface, QueryRunner} from "typeorm";

export class addCategories1653934494932 implements MigrationInterface {
    name = 'addCategories1653934494932'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`parentCategoryId\` int NOT NULL DEFAULT '0', \`name\` varchar(128) NOT NULL, \`description\` varchar(255) NULL, \`link\` varchar(128) NOT NULL, \`imageLink\` varchar(255) NULL, INDEX \`ix_categories_parentCategoryId\` (\`parentCategoryId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`ix_categories_parentCategoryId\` ON \`categories\``);
        await queryRunner.query(`DROP TABLE \`categories\``);
    }

}
