import {
  Request,
  Response,
} from 'express';

import { PrismaClient } from '@prisma/client';

import { HttpCode } from '../core/constants';

const prisma = new PrismaClient ()
  const apprenantsController = {
  
      getAllapprenants: async (req: Request, res:Response)=>
          {
              try {
                  const apprenants = await prisma.apprenants.findMany()
               
                  await res.json(apprenants).status(HttpCode.OK)
  
  
              } catch (error) {
                  console.error(error)
              }
          },
      getOneApprenant: async (req:Request, res:Response) => {
  
           try {
                 const {id}= req.params
                 const OneApprenant=  await prisma.apprenants.findMany({
                  where: {
                      apprenant_id: id
                  },
              })
                 if(!OneApprenant){
                    await res.status(HttpCode.NO_CONTENT).json({msg:"l'élément que vous recherchez n'existe pas "})
                 }
                  await res.status(HttpCode.OK).json(OneApprenant)
               
           } catch (error) {
              
           }
      },    
  
    //   createApprenant: async (req:Request, res:Response)=> {
    //          try {
              
    //           const { title, description, apprenants} = req.body;
  
    //           const projet = await prisma.projets.create({ 
    //               data:{
    //                   title,
    //                   description,
    //                   apprenants
    //               }})
    //               await res.json(projet)
  
    //          } catch (error) {
              
    //           console.error(error);
    //       }
    //   },
      
    //   updateProjet: async (req:Request, res:Response)=>{
    //        try {
    //           const {id}= req.params
    //           const { title, description, apprenants} = req.body;
    //           const projet = await prisma.projets.update({
    //               where: {
    //                   projet_id: id
    //               },
    //               data:{
    //                   title,
    //                   description,
    //                   apprenants
    //               }
    //           });
    //          await res.json(projet).status(HttpCode.OK);
  
    //        } catch (error) {
  
    //           console.error(error);
    //        }
           
  
    //   },
      
      deleteApprenant: async (req:Request, res:Response)=>{
          try {
              const {id}= req.params;
              await prisma.apprenants.delete({
                  where: {
                      apprenant_id: id
                  }
              });
              await res.status(HttpCode.NO_CONTENT).json({msg: "l'élèment selectionné a été supprimé"});
           } 
              catch (error) {
              console.error(error)
          }
      }
      
      }
  
    export default apprenantsController 