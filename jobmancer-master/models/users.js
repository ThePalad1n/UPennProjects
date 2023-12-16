module.exports = (sequelize, DataType) => {
    var Users = sequelize.define("User", {
        fullName: {
            type: DataType.STRING,
            allowNull: false
        },
        curTitle: {
            type: DataType.STRING,
            allowNull: false
        },
        per: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        phone: {
            type: DataType.STRING,
            allowNull: false
        },
        street: {
            type: DataType.STRING,
            allowNull: false
        },
        country: {
            type: DataType.STRING,
            allowNull: false
        },
        ustate: {
            type: DataType.STRING,
            allowNull: false
        },
        city: {
            type: DataType.STRING,
            allowNull: false
        },
        zip: {
            type: DataType.INTEGER,
            allowNull: false
        },
        network1: {
            type: DataType.STRING,
            allowNull: false
        },
        net_username1: {
            type: DataType.STRING,
            allowNull: false
        },
        siteurl1: {
            type: DataType.STRING,
            allowNull: false
        },
        network2: {
            type: DataType.STRING,
            allowNull: false
        },
        net_username2: {
            type: DataType.STRING,
            allowNull: false
        },
        siteurl2: {
            type: DataType.STRING,
            allowNull: false
        },
        network3: {
            type: DataType.STRING,
            allowNull: false
        },
        net_username3: {
            type: DataType.STRING,
            allowNull: false
        },
        siteurl3: {
            type: DataType.STRING,
            allowNull: false
        }


    })
    return Users;
};