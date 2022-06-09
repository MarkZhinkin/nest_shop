import {MigrationInterface, QueryRunner} from "typeorm";

export class addProducts1653934429261 implements MigrationInterface {
    name = 'addProducts1653934429261'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`categoryId\` int NOT NULL DEFAULT '0', \`name\` varchar(128) NOT NULL, \`description\` varchar(255) NULL, \`price\` int NOT NULL, \`discountPrice\` int NULL, \`available\` tinyint NOT NULL DEFAULT 1, \`amount\` int NOT NULL DEFAULT '0', \`rating\` int NOT NULL DEFAULT '0', \`link\` varchar(128) NOT NULL, \`imageLink\` varchar(255) NULL, \`characteristics\` varchar(255) NOT NULL DEFAULT '{}', INDEX \`ix_products_categoryId\` (\`categoryId\`), INDEX \`ix_products_price\` (\`price\`), INDEX \`ix_products_discountPrice\` (\`discountPrice\`), INDEX \`ix_products_available\` (\`available\`), INDEX \`ix_products_rating\` (\`rating\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`ix_products_rating\` ON \`products\``);
        await queryRunner.query(`DROP INDEX \`ix_products_available\` ON \`products\``);
        await queryRunner.query(`DROP INDEX \`ix_products_discountPrice\` ON \`products\``);
        await queryRunner.query(`DROP INDEX \`ix_products_price\` ON \`products\``);
        await queryRunner.query(`DROP INDEX \`ix_products_categoryId\` ON \`products\``);
        await queryRunner.query(`DROP TABLE \`products\``);
    }

}
