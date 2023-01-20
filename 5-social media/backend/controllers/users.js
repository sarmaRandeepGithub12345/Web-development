import User from "../models/User.js"

/* Read */

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)
        res.status(200).json({ user })

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)

        //If we have many promises,we use Promise.all to check them.If all our promises are resolved, then function is called . If any of our promises are rejected ,then catch function is called   
        //This iterates through the "id"s inside user.friends and checks the database to see if users with the respective id exists or not
        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        )
        //if friends exist in database then give an array object of friends
        const formattedFriends = friends.map(
            ({
                _id, firstName, lastName, occupation, location, picturePath
            }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        );

        //Store the "formattedFriends" array object to response object
        res.status(200).json(formattedFriends);
    } catch (error) {
        res.status(404).json({ message: error.message })

    }
}
/*  Update */ 
export const addRemoveFriend = async(req, res)=>{
    try {
        const { id, friendId } = req.params
        const user = await User.findById(id) 
        const friend = await User.findById(friendId) 
    if(user.friends.includes(friendId)){
        user.friends = user.friends.filter((id)=>id!==friendId)
        friend.friends = friend.friends.filer((id)=>id!==id)
    
    }else{
        user.friends.push(friendId);
        friend.friends.push(id)
    }    
    await user.save()
    await friend.save()
    const friends = await Promise.all(
        user.friends.map((id) => User.findById(id))
    )
    const formattedFriends = friends.map(
        ({
            _id, firstName, lastName, occupation, location, picturePath
        }) => {
            return { _id, firstName, lastName, occupation, location, picturePath };
        }
    );
    res.status(200).json(formattedFriends)
    } catch (error) {
        res.status(404).json({ message: error.message }) 
    }
}

