import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { HeaderComponent } from './components/header/header.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
	declarations: [HeaderComponent],
	imports: [RouterModule, HttpClientModule, CommonModule, SharedModule],
	exports: [HeaderComponent],
})
export class CoreModule {}
