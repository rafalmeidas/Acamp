import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, tap, take, map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class CrudService<T> {

  constructor(private http: HttpClient, private API_URL) { }

  list() {
    return this.http.get<T[]>(this.API_URL)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  listByUser(page = 1, limit = 6) {
    return this.http.get<T>(`${this.API_URL}?page=${page}&limit=${limit}&order=-created_at`)
      //.pipe(delay(300))
      .pipe(map(dados => dados));
  }

  loadByID(id) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1)).pipe(map(data => data
    ));
  }

  private create(record: T) {
    return this.http.post(this.API_URL, record).pipe(take(1));
  }

  private update(record: T) {
    return this.http.put(`${this.API_URL}/${record['id']}`, record).pipe(take(1));
  }

  save(record: T) {
    if (record['id']) {
      return this.update(record);
    }
    return this.create(record);
  }

  remove(id) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}