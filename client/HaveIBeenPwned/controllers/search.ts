/// <reference path="../../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../../typings/globals/angular/index.d.ts" />

module HaveIBeenPwned{
    /**
     * SearchController
     */
    export class SearchController {
        static $inject = ["PwnedService"];
        constructor(private pwnedService: IPwnedService) {
            
        }

        private breachedAccounts : BreachedAccount[];

        submit(address: string) {
            this.breachedAccounts = [];
            this.pwnedService.check(address).then((result: ng.IHttpPromiseCallbackArg<BreachedAccount[]>) => {
                this.breachedAccounts = result.data;
            }).catch((reason: any) => {
                alert(reason.Message || reason.message || "No data");
            });
        }

    }

    angular.module("HaveIBeenPwned").controller("SearchController", SearchController);
}