-- CreateTable
CREATE TABLE "product_enquiries" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productCode" TEXT,
    "metal" TEXT,
    "purity" TEXT,
    "netWeight" TEXT,
    "price" TEXT,
    "productUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_enquiries_pkey" PRIMARY KEY ("id")
);
