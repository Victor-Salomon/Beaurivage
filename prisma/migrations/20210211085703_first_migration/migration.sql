-- CreateTable
CREATE TABLE `Activity` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `activity_name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Address` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `zipcode` INT NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `brunch` BOOLEAN,
    `breakfast` BOOLEAN,
    `snack` BOOLEAN,
    `lunch_diner` BOOLEAN,
    `ocean` BOOLEAN,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
