import { PagesEnum } from "./page";

const GetPages = () => {
    let statePage = PagesEnum.INICIO;
    return [statePage];
}

const Pages = GetPages();

Pages.indexOf('INICIO');