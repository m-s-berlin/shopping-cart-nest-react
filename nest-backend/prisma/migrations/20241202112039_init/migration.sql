-- CreateTable
CREATE TABLE "shopproduct" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "shopproduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shopcategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "shopcategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shopcart" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "shopcart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shopcartitem" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "cartId" INTEGER NOT NULL,

    CONSTRAINT "shopcartitem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "shopproduct" ADD CONSTRAINT "shopproduct_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "shopcategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopcartitem" ADD CONSTRAINT "shopcartitem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "shopproduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopcartitem" ADD CONSTRAINT "shopcartitem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "shopcart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
