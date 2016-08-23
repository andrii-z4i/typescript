module HaveIBeenPwned {
    export interface IEnterKeyPressAttributes extends ng.IAttributes {
        ngEnter: string;
    }

    class EnterKeyPressDirective implements ng.IDirective {
        link($scope: ng.IScope, elm: Element, attr: IEnterKeyPressAttributes, ngModel: ng.INgModelController): void {
            var element = angular.element(elm);
            element.bind("keydown pressed", (event: JQueryEventObject) => {
                if (event.which === 13){
                    $scope.$apply(() => {
                        $scope.$eval(attr.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        }

        require = "?ngModel";
        restrict = "A";
 
        static instance(): ng.IDirective {
            return new EnterKeyPressDirective();
        }
    }

    angular.module("HaveIBeenPwned").directive("ngEnter", EnterKeyPressDirective.instance);
    
}