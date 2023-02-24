import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

interface Daily {
   id: number
   name: string
   summary: string
   isCompleteToday: boolean
}

export default function Dailys() {
   const [savedDailys, setSavedDailys] = useState<Daily[]>([
      {
         id: 1,
         name: 'Language improvement',
         summary: 'Whatever language you are learning, smash it!',
         isCompleteToday: false
      },
      {
         id: 2,
         name: 'Physical movement improvement',
         summary: 'Some form of movement that improves your body!',
         isCompleteToday: false
      },
      {
         id: 3,
         name: 'Nutrition targets',
         summary: 'Have you eaten well?',
         isCompleteToday: false
      },
      {
         id: 4,
         name: 'Mental wellness improvement',
         summary:
            'Have exercised your mind? (Meditation, brain traing, journaling ...)',
         isCompleteToday: false
      }
   ])
   return (
      <View>
         {savedDailys.map((daily) => (
            <Text>{daily.name}</Text>
         ))}
      </View>
   )
}

const styles = StyleSheet.create({})

// This is going to be where you add the things that you want to work on each day
// Exercise / Movement / Healthy eating / Duoling / Improvements
// Decision here is just "Are you going to work on this improvement today" - yes!
