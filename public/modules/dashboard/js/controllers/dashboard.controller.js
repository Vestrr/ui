'use strict';

angular.module('dashboard')
    .controller('DashboardCtrl', ['$scope', 'Dashboard', function($scope, Dashboard){

      var moment = require('moment')

    $scope.dashboard = {
      alert: {
        message: "Tell us how you want to get paid: set up your payout methods by clicking here",
        state: "dashboard.payments"
      },
      in_rentals: [
        {
          id: 1332,
          designer: "test designer",
          name: "name",
          size: "medium",
          tracking_id: "#48SJ234",
          start_time: "sdjf",
          finish_time: "sdjf",
          images: [
            {
              id: 1,
              url: "http://www.alicemccall.com/media/catalog/product/cache/1/small_image/344x568/0dc2d03fe217f8c83829496872af24a0/a/m/amd21117blackfront.jpg"
            }
          ]
        },
        {
          id: 1332,
          designer: "test designer",
          name: "name",
          size: "medium",
          tracking_id: "#48SJ234",
          start_time: "sdjf",
          finish_time: "sdjf",
          images: [
            {
              id: 1,
              url: "https://d8kqh919o5vqj.cloudfront.net/eshop/images/T/xctmpcsVEth.jpg"
            }
          ]
        },
        {
          id: 1332,
          designer: "test designer",
          name: "name",
          size: "medium",
          tracking_id: "#48SJ234",
          start_time: "sdjf",
          finish_time: "sdjf",
          images: [
            {
              id: 1,
              url: "https://d8kqh919o5vqj.cloudfront.net/eshop/images/T/xctmpfiE4jd.jpg"
            }
          ]
        },
        {
          id: 1332,
          designer: "test designer",
          name: "name",
          size: "medium",
          tracking_id: "#48SJ234",
          start_time: "sdjf",
          finish_time: "sdjf",
          images: [
            {
              id: 1,
              url: "https://d8kqh919o5vqj.cloudfront.net/eshop/images/T/xctmp86IyuF.jpg"
            }
          ]
        }
      ],
      profile: {
        email: "achadee15@gmail.com",
        first_name: "Avin",
        last_name: "Chadee",
        dob: "dfhdsifh",
        phone_number: "2334342",
        city: "Melbourne",
        height: 312,
        sizes: [
          {
            designer: "marka",
            size: "medium"
          }
        ],
        addresses: [
          {
            full_name: "Avin Chadee",
            address_1: "2 Plummer Rd",
            address_2: "",
            city: "Mentone",
            postcode: "3194",
            state: "vic"
          }
        ]
      }
    }  

    $scope.format_time = function(time) {
      return "17 Jan"
    }

    $scope.get_status = function(start, finish) {
      return "Active"
    }

}]);
