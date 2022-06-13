import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://Lidiia:qwerqwer@cluster0.nnomy.mongodb.net/products?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
