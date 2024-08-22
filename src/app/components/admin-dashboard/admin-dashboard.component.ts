import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { UserRole } from '../../model/user-role.model';
import { AdminDashboardService } from './admin-dashboard.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})


export class AdminDashboardComponent implements OnInit{
  employees = [
    {
      employeeId: 1234,
      firstName: 'aman',
      lastName: 'khan',
      jobTitle: 'Software Engineer',
      phoneNumber: '461672738',
      email: 'aman@ukg.com',
      employeeRoles: ['Admin', 'User']
    },
    {
      employeeId: 1002,
      firstName: 'Jane',
      lastName: 'Smith',
      jobTitle: 'Project Manager',
      phoneNumber: '+1 345-678-9012',
      email: 'jane.smith@example.com',
      employeeRoles: ['Manager', 'User']
    },
    {
      employeeId: 1003,
      firstName: 'Emily',
      lastName: 'Johnson',
      jobTitle: 'UI/UX Designer',
      phoneNumber: '+1 456-789-0123',
      email: 'emily.johnson@example.com',
      employeeRoles: ['Designer', 'User']
    },
    {
      employeeId: 1004,
      firstName: 'Michael',
      lastName: 'Brown',
      jobTitle: 'DevOps Engineer',
      phoneNumber: '+1 567-890-1234',
      email: 'michael.brown@example.com',
      employeeRoles: ['DevOps', 'User']
    }
  ]; // Placeholder data
  errorMessage: string = '';

  constructor(private adminDashboardService: AdminDashboardService, private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployeesData();
  }

  getAllEmployeesData() {
    this.adminDashboardService.getAllEmployees().subscribe(
      (response) => {
        console.log("Employees Data Fetched Successfully:  ", response)
        this.employees = response
      },
      (error) => {
        this.errorMessage = 'Error fetching employees.';
      }
    );
  }

     // navigation
    navigateToEditEmployee(id: number) {
      this.router.navigate([`/edit-employee/${id.toString()}`]);
    };

    goToCreateEmployee(){
      this.router.navigate(['/create-employee']);
      // console.log("Navigated to Create Employee Page");
    };
}
