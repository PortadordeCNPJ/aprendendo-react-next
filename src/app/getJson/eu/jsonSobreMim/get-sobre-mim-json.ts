import fsPromises from 'fs/promises';
import path from 'path';

const getDataJson = async () =>{
    const filePath = path.join(process.cwd(), './src/app/getJson/eu/jsonSobreMim/teste.json');

    const jsonData = await fsPromises.readFile(filePath);

    const objectData = JSON.parse(jsonData.toString());

    return objectData;
}

export {getDataJson}