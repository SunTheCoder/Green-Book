/*

metaverse safe spaces
map to each space
set up calendar and events for each space
product page

projects page for collaboration

favorite plants
favorite events to host

***family tree for each farm

//do not use google fonts for privacy// they will isntall cookies on a device in order to track the font
*/

class SafeSpace {
    constructor(name, farmHead, yearEstablished, location, description) {
        this.name = name
        this.farmHead = farmHead
        this.yearEstablished = yearEstablished    //typeof num
        this.location = location //includes comma or num words < 8
        this.description = description //num words >= 8
        this.tree = new FamilyTree(farmHead)
        
    }
}

//a different kind of family tree/lineage/legacy tree that allows chosen family and creativity

class FamilyMember {
  constructor(name, birthdayYear, relationship, head = false ) {
    this.name = name
    this.birthdayYear = birthdayYear //could be represented by number for a BST?
    this.relationship = relationship 
    this.head = head

  }

}
class FamilyTree { ///function for get relationship because it is different per person
  constructor(familyName) {
    this.familyName = familyName
    this.family = {}
    this.familyHead
  }
  
    addFamilyMember(name, birthdayYear, relationship, head) {
      //if no root; add head
      
      let familyMember = new FamilyMember(name, birthdayYear, relationship, head)
      
      this.family[name] = familyMember

    }
    

    //remove func
}

class SocialNetwork {
    constructor() {
      this.safeSpaces = {};
      this.follows = {};
      this.currentID = 0;
    }

    //Intake info from a HTML form?
  
    addSpace(name, farmHead, yearEstablished, location, description) {
      // Your code here 
      let newSpace = new SafeSpace(name, farmHead, yearEstablished, location, description)
      this.currentID = Object.entries(this.safeSpaces).length+1
      // let safeSpace = {'id': this.currentID, 'name': newSpace.name}
      let safeSpace = newSpace

      this.safeSpaces[this.currentID] = safeSpace
      // console.log(this.safeSpaces)
      this.follows[this.currentID] = new Set()
      return this.currentID
  
    }

    // addInfo(userID, info) { //can it take multiple inputs if put into an array?
        
    //     if (typeof info === 'number') {
    //         return this.safeSpaces[userID].yearEstablished = info
    //     } else if (info.split(' ').length < 8) {
    //         return this.safeSpaces[userID].location = info
    //     } else if (info.split(' ').length >= 8) {
    //         return this.safeSpaces[userID].description = info
    //     }
        
    // }

    getSafeSpaces(userID) {
      // Your code here 
      if (this.safeSpaces[userID]) return this.safeSpaces[userID]
      return null
    }
  
    follow(userID1, userID2) {
      // Your code here 
      if (!this.getSafeSpaces(userID2)) {
        return false
      }
      this.follows[userID1].add(userID2)
      // console.log(this.follows[userID1])
      if (this.follows[userID1].has(userID2)) {
        return true
      }
    }
  
    getFollows(userID) {
      // Your code here 
      return this.follows[userID]
    }
  
    getFollowers(userID) {
      // Your code here 
      let followers = new Set()
      for (let user in this.safeSpaces) {
        if (this.follows[user].has(userID)) {
          followers.add(parseInt(user))
        }
      }
      return followers
    }
  
    getRecommendedFollows(userID, degrees) {
    
      let queue = [[userID]]
      let visited = new Set();
      let recommended = [];
  
      while (queue.length) {
        let current = queue.shift()
        // console.log(current, degrees)
        let id = current[current.length - 1]
        // console.log(id)
        
        if (current.length <= degrees + 2) {
          if (!this.follows[userID].has(id) && id !== userID) {
            recommended.push(id)
          }
        }
        // console.log('rec:',recommended)
  
        for (let neighbor of this.follows[id]) { //for of on a SET!
          // console.log(this.follows[id])
          // console.log(neighbor)
  
          if (!visited.has(neighbor)) {
            queue.push(current.concat([neighbor]))
            visited.add(neighbor)
          }
        }
      }
      return recommended
    }
  }
  
  module.exports = SocialNetwork;
  
  let greenBook = new SocialNetwork()
  // let tree = new FamilyTree('English')
  

  greenBook.addSpace('Liberation Seed Farm', 'English', 2020, 'Prospect, Va', 'We are a black, family-owned farmed in Central, Va. We grow organically, utilizing Afro-Indigenous processes to not only grow healthy plants; but nuture our land as well.')
  greenBook.addSpace('Blue Light Junction', 'Miles', 2020, 'Baltimore,  Md', 'Natural Indigo Dye processing and community lorem ipsum...')
  greenBook.addSpace('Goldman Farm', 'Goldman', 'n/a', 'Central VA')
  greenBook.addSpace('June Bug Farm')
  greenBook.addSpace('Soul Fire Farm', 'Penniman', 2000, 'Upstate NY', 'Black farm...')
  greenBook.addSpace('Soul Flower Farm')
  greenBook.addSpace('Mighty Thundercloud Farm', 2010, 'VA', 'Mighty farm of mighty organicness...')
  greenBook.addSpace('Farm Alliance of Baltimore', 'n/a', 'n/a', 'Baltimore,  Md', 'Teaching Farm')
  greenBook.addSpace('Strength to Love Farm', 'n/a', 'Baltimore,  Md', 'Urban fresh black owned afro-veggies.')
  greenBook.addSpace('Maroon Grove Farm')
  
  greenBook.follow(1, 2)
  greenBook.follow(1, 3)
  greenBook.follow(1, 5)
  greenBook.follow(1, 8)
  
  greenBook.follow(2, 1)
  greenBook.follow(2, 3)

  greenBook.follow(3, 2)
  greenBook.follow(3, 5)

  greenBook.follow(4, 1)
  greenBook.follow(4, 2)
  greenBook.follow(4, 5)

  greenBook.follow(5, 1)
  greenBook.follow(5, 3)
  greenBook.follow(5, 4)

  greenBook.follow(6, 3)
  greenBook.follow(6, 7)
  greenBook.follow(6, 1)

  greenBook.follow(7, 4)
  greenBook.follow(7, 8)

  greenBook.follow(8, 1)
  greenBook.follow(8, 9)
  greenBook.follow(8, 3)
  greenBook.follow(8, 5)

  greenBook.follow(9, 6)
  greenBook.follow(9, 2)
  greenBook.follow(9, 4)

  greenBook.follow(10, 7)
  greenBook.follow(10, 2)
  greenBook.follow(10, 4)
  greenBook.follow(10, 5)
  greenBook.follow(10, 8)

  console.log('\nLiberation Seed follows:\n', greenBook.getFollows(1))
  console.log('\nBlue Light Junction follows:\n', greenBook.getFollows(2))
  console.log('\nJune Bug Farm follows:\n', greenBook.getFollows(4))
  console.log('\nNetwork:\n', greenBook)

  console.log(greenBook.getFollowers(1))

  console.log('\nRecommended Spaces 1st Degree:', greenBook.getRecommendedFollows(1, 1))
  console.log('Recommended Spaces 2nd Degree:', greenBook.getRecommendedFollows(1, 2))
  console.log('Recommended Spaces 3rd Degree:', greenBook.getRecommendedFollows(1, 3), '\n')

  // console.log(greenBook.addInfo(1, 2020))
  // console.log(greenBook.addInfo(1, 'Prospect, Va'))
  // console.log(greenBook.addInfo(1, 'We are a black, family-owned farmed in Central, Va. We grow organically, utilizing Afro-Indigenous processes to not only grow healthy plants; but nuture our land as well.'))


  console.log(greenBook.safeSpaces)
//   console.log(greenBook.safeSpaces[1].info = 'hi')
  console.log(greenBook.safeSpaces[1])

  console.log('\nNetwork:\n', greenBook)

  console.log(greenBook.safeSpaces)

  // tree.addFamilyMember('Linda', 1952, 'Mother', true)
  // tree.addFamilyMember('Bobby', 1956, 'Father', true)
  // tree.addFamilyMember('Sun', 1989, 'Son')
  // tree.addFamilyMember('Darrian', 1975, 'Son')
  // tree.addFamilyMember('Syreeta', 1975, 'Daughter')
  // tree.addFamilyMember('Liam', 2019, 'Grandson')

  // console.log(tree)

  greenBook.safeSpaces[1].tree.addFamilyMember('Linda', 1952, 'Mother', true)
  greenBook.safeSpaces[1].tree.addFamilyMember('Bobby', 1956, 'Father', true)
  greenBook.safeSpaces[1].tree.addFamilyMember('Sun', 1989, 'Son')
  greenBook.safeSpaces[1].tree.addFamilyMember('Darrian', 1975, 'Son')
  greenBook.safeSpaces[1].tree.addFamilyMember('Syreeta', 1975, 'Daughter')
  greenBook.safeSpaces[1].tree.addFamilyMember('Liam', 2019, 'Grandson')

  greenBook.safeSpaces[2].tree.addFamilyMember('Kenya', 1989, 'Mother', true)
  greenBook.safeSpaces[2].tree.addFamilyMember('Indigo', 2015, 'Son')

  greenBook.safeSpaces[3].tree.addFamilyMember('Brick', 1970, 'Father', true)

  console.log(greenBook.safeSpaces[1])
  console.log(greenBook.safeSpaces[1].tree)

  console.log(greenBook.safeSpaces[2])
  console.log(greenBook.safeSpaces[2].tree)

  console.log(greenBook.safeSpaces[3])
  console.log(greenBook.safeSpaces[3].tree)


