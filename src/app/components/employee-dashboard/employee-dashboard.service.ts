import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveRequest } from '../../model/leave-request.model';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { SalaryInfo } from '../../model/salaryInfo.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeDashboardService {
  private apiUrl = 'http://localhost:8080/leave'; 
  private apiUrl2 = 'http://localhost:8080/report'; //Our APIs

  constructor(private http: HttpClient) {}


 getLeave(employeeId: number):Observable<LeaveRequest>{
  return this.http.get<LeaveRequest>(`${this.apiUrl}/viewLeaves?employeeId=${employeeId}`).pipe(
    catchError((error) => {
      console.error('Error fetching leave request count:', error);
      return throwError(error);
    })
  );
 }


 getSalary(employeeId:number):Observable<SalaryInfo>{
  return this.http.get<SalaryInfo>(`${this.apiUrl2}/getsalary?employeeId=${employeeId}`).pipe(
    catchError((error) => {
      console.error('Error fetching salary info:', error);
      return throwError(error);
    })
  );
 }

 submitLeaveRequest(leaveRequest:Partial<LeaveRequest>): Observable<LeaveRequest> {
  console.log("Before Request" ,leaveRequest);
  return this.http.post<LeaveRequest>(`${this.apiUrl}/leaveRequest`, leaveRequest).pipe(
    catchError((error) => {
      console.error('Error submitting leave request:', error);
      return throwError(error);
    })
  );
 }
}
