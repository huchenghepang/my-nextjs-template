/*
  Warnings:

  - Added the required column `telephone_number` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `telephone_number` VARCHAR(191) NOT NULL;
