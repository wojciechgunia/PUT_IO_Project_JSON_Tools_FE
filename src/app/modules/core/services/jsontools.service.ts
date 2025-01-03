import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsontoolsService {
  private jsonListSubject: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);
  private StringListSubject: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);

  apiUrl = 'http://localhost:8080/api/v1/jsontools';

  constructor(private http: HttpClient) {}

  getJsonList(): Observable<string[]> {
    return this.jsonListSubject.asObservable();
  }

  newJsonList(JsonList: string[]) {
    this.jsonListSubject.next(JsonList);
  }

  getStringList(): Observable<string[]> {
    return this.StringListSubject.asObservable();
  }

  newStringList(JsonList: string[]) {
    this.StringListSubject.next(JsonList);
  }

  postJson(name: string, JSON: string): Observable<never> {
    const params = new HttpParams().append('JSONname', name);
    return this.http.post<never>(`${this.apiUrl}/load-json`, JSON, {
      params,
    });
  }

  syncJsonList() {
    this.http.get<string[]>(`${this.apiUrl}/get-json-list`, {}).subscribe({
      next: (value) => {
        this.newJsonList(value);
      },
    });
    this.http.get<string[]>(`${this.apiUrl}/get-original-list`, {}).subscribe({
      next: (value) => {
        this.newStringList(value);
      },
    });
  }

  getJsonAsStr(name: string): Observable<string> {
    const params = new HttpParams().append('JSONname', name);
    return this.http.get(`${this.apiUrl}/get-original`, {
      params,
      responseType: 'text',
    });
  }

  getMinimalize(name: string): Observable<string> {
    const params = new HttpParams().append('JSONname', name);
    return this.http.get(`${this.apiUrl}/get-minimalize`, {
      params,
      responseType: 'text',
    });
  }

  getMaximalize(name: string): Observable<string> {
    const params = new HttpParams().append('JSONname', name);
    return this.http.get(`${this.apiUrl}/get-full`, {
      params,
      responseType: 'text',
    });
  }

  getFiltered(name: string, keys: string): Observable<string> {
    const params = new HttpParams()
      .append('JSONname', name)
      .append('keysToLeave', keys);
    return this.http.get(`${this.apiUrl}/get-filtered`, {
      params,
      responseType: 'text',
    });
  }

  getExcludeFiltered(name: string, keys: string): Observable<string> {
    const params = new HttpParams()
      .append('JSONname', name)
      .append('keysToRemove', keys);
    return this.http.get(`${this.apiUrl}/get-without`, {
      params,
      responseType: 'text',
    });
  }

  getCompared(name1: string, name2: string): Observable<string> {
    const params = new HttpParams()
      .append('JSONname1', name1)
      .append('JSONname2', name2);
    return this.http.get(`${this.apiUrl}/get-differences`, {
      params,
      responseType: 'text',
    });
  }
}
