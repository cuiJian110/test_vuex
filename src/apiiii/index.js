import {get,post} from './http'
export const getData = params =>  get('data.json',params)

export const testPost = params => post('testPost',params)
