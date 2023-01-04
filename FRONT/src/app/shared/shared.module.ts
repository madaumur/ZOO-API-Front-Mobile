import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from './material.module'
import { PositionPipe } from './pipes/position.pipe'
import { GenderPipe } from './pipes/gender.pipe'

@NgModule({
	declarations: [PositionPipe, GenderPipe],
	imports: [CommonModule, MaterialModule, ReactiveFormsModule],
	exports: [MaterialModule, ReactiveFormsModule, PositionPipe, GenderPipe],
})
export class SharedModule {}
