/// An struct type to represent all objects present in a Room
pub struct Item {
    name: String,
    desc: String,
}

impl Item {
    pub fn new(name: &str, desc: &str) -> Item {
        Item {
            name: name.to_owned(),
            desc: desc.to_owned(),
        }
    }
    pub fn name(&self) -> String {
        self.name.clone()
    }
    pub fn desc(&self) -> String {
        self.desc.clone()
    }
}