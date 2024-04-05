import { withAccelerate } from "@prisma/extension-accelerate";
import {Hono} from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string 
        JWT_SECRET: string
    },
        Variables:{
            userId: string;
        }  
}>();


//1  check actually logedIn if not block the userid
//2  if loggedIn get userid pass the userId
blogRouter.use("/*" ,async  (c,next) =>{
    const authHeader = c.req.header("authorization") || "";
    const user = await verify(authHeader , c.env.JWT_SECRET) ;
    if(user){
        c.set("userId" , user.id);
         await next();
    }else{
        c.status(403);
        return c.json({
            message: "You are not logged in "
        })
    }
    //extract the user id  
    //pass it down to the route handler
})

blogRouter.post('/', async (c)=>{
    const body = await c.req.json();
    const authorId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate() )

    const blog = await prisma.blog.create({
        data:{
            title:body.title,
            content:body.content,
            authorId: authorId
        }
    })
    return c.json({
        id:  blog.id
    })
  })


blogRouter.put('/', async (c)=>{
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate() )
    const blog = await prisma.blog.update({
        where:{
            id: body.id
        },
        data:{
            title: body.title,
            content: body.content,
        }
    })
    return c.json({
        id:  blog.id
    })
    
  })

     //pagination 
blogRouter.get('/bulk', async (c)=>{
    const prisma = new PrismaClient({
       datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogs = await prisma.blog.findMany({
        select:{
           content: true,
           title: true,
           id: true,
           author: {
               select:{
                   name: true
               }
            }
        }
    });
   return c.json({
    blogs
       
   })
 })


blogRouter.get('/:id', async (c)=>{
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate() )
try{
    const blog = await prisma.blog.findFirst({
        where: {
            id: id
        },select:{
            id: true,
            title:true,
            content:true,
            author:{
                select:{
                    name: true
                }
            }
        }
    })
    return c.json({
        blog
    });
} catch(e){
    c.status(411);
    return c.json({
        message:"Error while fetching the blog post"
    }); 
}
    
})
