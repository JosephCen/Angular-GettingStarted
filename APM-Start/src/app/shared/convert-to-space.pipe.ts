import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'convertToSpace'
})
export class convertToSpacePipe implements PipeTransform {
    transform(value: string, convertCh: string): string {
        return value.replace(convertCh, ' ');
    }
}