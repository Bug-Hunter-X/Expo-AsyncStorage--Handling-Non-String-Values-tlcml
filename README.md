# Expo AsyncStorage: Handling Non-String Values

This repository demonstrates a common error when using AsyncStorage in Expo: attempting to store non-string values.  AsyncStorage in Expo only supports storing strings.  This example shows the problem and how to resolve it by stringifying and parsing JSON.

## Problem
Attempting to store non-string data, like objects or numbers, into AsyncStorage will lead to unpredictable behavior. The error isn't always apparent, often appearing as silent failures or unexpected application behavior.

## Solution
The solution involves stringifying JavaScript objects using `JSON.stringify` before storing them in AsyncStorage and then parsing the retrieved string back into a JavaScript object using `JSON.parse`.