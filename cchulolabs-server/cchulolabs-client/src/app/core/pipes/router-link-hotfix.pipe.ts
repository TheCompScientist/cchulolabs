import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routerLinkHotfix'
})
export class RouterLinkHotfixPipe implements PipeTransform {

  transform( _: any, path: string, currUrl: string): boolean {
    return path === currUrl;
  }

}
