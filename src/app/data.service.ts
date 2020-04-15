import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient, private srs: ScullyRoutesService) { }

    getData(collection: string, file: string): Promise<any> {
        return this.httpClient.get(`assets/${collection}/${file}`).toPromise();
    }

    async getDataList(collection: string) {
        return new Promise<any[]>(async (resolve, reject) => {
            try {
                this.srs.available$.subscribe((async (routes) => {
                    let scullyRoutes = routes.filter(r => r.route.startsWith(`/${collection}/`));

                    let result = [];
                    for (let scullyRoute of scullyRoutes) {
                        let data = await this.getData(collection, scullyRoute.sourceFile);
                        data.scullyRoute = scullyRoute;
                        result.push(data);
                    }
                    resolve(result);
                }));
            } catch (error) {
                reject(error);
            }
        })
    }
}