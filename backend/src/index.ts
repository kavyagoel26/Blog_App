import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

const app = new Hono<{
  Bindings: {  
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();

app.route("/api/v1/user", userRouter)
app.route("/api/v1/blog", blogRouter  )





export default app


//postgresql://kavyagoel262000:RGz8xjohv2wZ@ep-still-limit-a58ar3x3.us-east-2.aws.neon.tech/next-2?sslmode=require


//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiODI5MWJhMTEtMjU5NC00ZTk2LWJjNmItNmU3Y2Y3NTNmZTkyIiwidGVuYW50X2lkIjoiYTIyMGFmODQ5Y2ExZjQxYzViMWQ3ZDI0YjEyMGY0MTYyNWUwMDQzNGUzYTlhNGQzYjA1YzA0YmFkMTc3YmVkMiIsImludGVybmFsX3NlY3JldCI6IjBkYjM4ZmJiLTI1ZWItNDIzOS04MTBlLTA0ZDU0YTk1MmNiOCJ9.WHIl6kSCRqRxfdwD8_0UY4Db_-pry_SG983GphbQTXk"