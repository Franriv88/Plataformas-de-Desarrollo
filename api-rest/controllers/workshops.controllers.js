import * as WorkshopModel from "../models/workshopModel.js"

export async function getWorkshops(req, res){
    try{
        const workshops = await WorkshopModel.find()
        res.status(200).json({workshops})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export async function createWorkshop(req, res){
    try{
        const result = await WorkshopModel.create(req.body)
        res.status(201).json({message: "Workshop creado", id: result.insertId})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export async function updateWorkshop(req, res){
    const id = req.params.id
    try{
        await WorkshopModel.update(id, req.body)
        res.status(200).json({message: "Workshop actualizado"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export async function deleteWorkshop(req, res){
    const id = req.params.id
    try{
        await WorkshopModel.remove(id)
        res.status(200).json({message: "Workshop eliminado"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
