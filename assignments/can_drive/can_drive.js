function CanDrive(hasDrivingLiscence, isTired, isSober) {
    if (hasDrivingLiscence == false) {
        return "You cannot drive";
    }
    else if (isTired == false && isSober == true){
        return  "You can drive";

    }
    else{
        return  "You shouldn't drive";

    }
}

module.exports = CanDrive;
