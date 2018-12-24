use serde_derive::Deserialize;
use serde_derive::Serialize;

use crate::properties::{IsLocked, IsOpen};

#[derive(Serialize, Deserialize)]
pub struct Pathway {
    name: String,
    desc: String,
    inspection: String,
    is_open: IsOpen,
    is_locked: IsLocked,
}

impl Pathway {
    pub fn new(
        name: &str,
        desc: &str,
        inspection: &str,
        is_open: IsOpen,
        is_locked: IsLocked,
    ) -> Self {
        Self {
            name: name.to_string(),
            desc: desc.to_string(),
            inspection: inspection.to_string(),
            is_open,
            is_locked,
        }
    }

    pub fn name(&self) -> String {
        self.name.clone()
    }

    pub fn desc(&self) -> String {
        self.desc.clone()
    }

    pub fn inspection(&self) -> String {
        self.inspection.clone()
    }
}
