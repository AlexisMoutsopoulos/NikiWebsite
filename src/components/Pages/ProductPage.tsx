import { sets } from "../../constansts/ImagesText"
import { SetContainer } from "../SetContainer"


export const ProductPage = () => {
    return sets.map(set => (<SetContainer setTextData={set}/>))
}