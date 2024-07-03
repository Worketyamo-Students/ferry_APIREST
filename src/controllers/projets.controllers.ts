import {
  Request,
  Response,
} from 'express';

import { PrismaClient } from '@prisma/client';

import { HttpCode } from '../core/constants';

const prisma = new PrismaClient ()
const projetController = {

    getAllProjet: async (req: Request, res:Response)=>
        {
            try {
                const projets = await prisma.projets.findMany()
             
                await res.json(projets).status(HttpCode.OK)


            } catch (error) {
                console.error(error)
            }
        },
    getOneProjet: async (req:Request, res:Response) => {

         try {
               const {id}= req.params
               const Oneprojet=  await prisma.projets.findMany({
                where: {
                    projet_id: id
                },
            })
               if(!Oneprojet){
                  await res.status(HttpCode.NO_CONTENT).json({msg:"l'élément que vous recherchez n'existe pas "})
               }
                await res.status(HttpCode.OK).json(Oneprojet)
             
         } catch (error) {
            
         }
    },    

    createProjet: async (req:Request, res:Response)=> {
           try {
            
            const { title, description, apprenants} = req.body;

            const projet = await prisma.projets.create({ 
                data:{
                    title,
                    description,
                    apprenants
                }})
                await res.json(projet)

           } catch (error) {
            
            console.error(error);
        }
    },
    
    updateProjet: async (req:Request, res:Response)=>{
         try {
            const {id}= req.params
            const { title, description, apprenants} = req.body;
            const projet = await prisma.projets.update({
                where: {
                    projet_id: id
                },
                data:{
                    title,
                    description,
                    apprenants
                }
            });
           await res.json(projet).status(HttpCode.OK);

         } catch (error) {

            console.error(error);
         }
         

    },
    
    deleteProjet: async (req:Request, res:Response)=>{
        try {
            const {id}= req.params;
            await prisma.projets.delete({
                where: {
                    projet_id: id
                }
            });
            await res.status(HttpCode.NO_CONTENT).json({msg: "l'élèment selectionné a été supprimé"});
         } 
            catch (error) {
            console.error(error)
        }
    }
    
    }

  export default projetController  