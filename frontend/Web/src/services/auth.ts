import React, { useState } from 'react'

export default function getAuthHeader() {
    const token = localStorage.getItem("accessToken")
    
    const authHeader = {
      headers: {
          Authorization: `Bearer ${token}`
      }
    }
    return authHeader;
}
