import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//for dummy should be deleted
import { KisanListComponent } from './kisan-list/kisan-list.component';
import { TraderListComponent } from './trader-list/trader-list.component';
import { MandiListComponent } from './mandi-list/mandi-list.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { ListOfStateComponent } from './list-of-state/list-of-state.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { StockDataComponent } from './stock-data/stock-data.component';
import { AumDailyReportComponent } from './aum-daily-report/aum-daily-report.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component'; 

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Super Admin Panel'
    },
    children: [
      {
        path: 'KisanList',
        component: KisanListComponent,
        data: {
          title: 'Kisan List'
        }
      },
      {
        path: 'TraderList',
        component: TraderListComponent,
        data: {
          title: 'Trader List'
        }
      },
      {
        path: 'MandiList',
        component: MandiListComponent,
        data: {
          title: 'Mandi List'
        }
      },
      {
        path: 'LabList',
        component: LabListComponent,
        data: {
          title: 'Lab List'
        }
      },
      {
        path: 'ProductList',
        component: ProductListComponent,
        data: {
          title: 'Product List'
        }
      },
      {
        path: 'EmployeeList',
        component: EmployeeListComponent,
        data: {
          title: 'Employee List'
        }
      },
      {
        path: 'BankList',
        component: BankListComponent,
        data: {
          title: 'Bank List'
        }
      },
      {
        path: 'ListOfState&City',
        component: ListOfStateComponent,
        data: {
          title: 'List Of State & City'
        }
      },
      {
        path: 'TabList',
        component: TabListComponent,
        data: {
          title: 'Tab List'
        }
      },
      {
        path: 'ActivityLog',
        component: ActivityLogComponent,
        data: {
          title: 'Activity Log'
        }
      },
      {
        path: 'StockData',
        component: StockDataComponent,
        data: {
          title: 'Stock Data'
        }
      },
      {
        path: 'AUMDailyReport',
        component: AumDailyReportComponent,
        data: {
          title: 'AUM Daily Report'
        }
      },
      {
        path: 'addproduct',
        component: AddProductComponent,
        data: {
          title: 'Add Product'
        }
      },
      {
        path: 'updateproduct',
        component: UpdateProductComponent,
        data: {
          title: 'Update Product'
        }
      }
    ]
  }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class SuperAdminRoutingModule {}
