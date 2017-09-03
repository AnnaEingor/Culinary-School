culinaryApp.factory("Course", function(Users, User) {

    function Course(plainObject) {
        this.title = plainObject.title;
        this.numberCourse = plainObject.numberCourse;
        this.daysAndDate = plainObject.daysAndDate;
        this.baseTheme = plainObject.baseTheme;
        this.id = plainObject.index;
        
    };
    return Course;
});

