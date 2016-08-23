/// <reference path="../../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../../typings/globals/angular/index.d.ts" />

module HaveIBeenPwned{
    export interface IPwnedService {
        check(address: string) : ng.IPromise<{}>;
    }

    class PwnedService implements IPwnedService {
        static $inject = ["$http"];

        constructor(private $http: ng.IHttpService) {

        }

        check(address: string) : ng.IPromise<{}> {
            return this.$http.get("https://haveibeenpwned.com/api/v2/breachedaccount/" + address);
        }
    }

    angular.module("HaveIBeenPwned").service("PwnedService", PwnedService);
}