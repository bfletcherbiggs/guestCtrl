angular.module('myApp').controller('GuestCtrl', function($scope) {
    //$scope = {}
    $scope.test = "Wubblasdfjasdflkjafdsijdfs"

    $scope.guests = [{
            name: 'Christian',
            hatSize: 'L'
        },
        {
            name: 'Ben',
            hatSize: 'M'
        },
        {
            name: 'Joe',
            hatSize: 'XS'
        }
    ]
//not necessary to define variables as empty strings unless it's helpful to understand
    $scope.addGuest = function() {
        var newGuest = {
            name: $scope.newGuestName,
            hatSize: $scope.newGuestHatSize
        }

        $scope.guests.push(newGuest)

    }
})
