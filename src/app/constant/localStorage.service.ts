import { Injectable } from '@angular/core';
@Injectable()

export class LocalStorageService {

    constructor() {
    }

    saveData(key: string, data: any): void {
        sessionStorage.setItem(key, JSON.stringify(data));
    }

    getData(key: string): void {
        return JSON.parse(sessionStorage.getItem(key));
    }

    removeData(key: string): void {
        sessionStorage.removeItem(key);
    }
}