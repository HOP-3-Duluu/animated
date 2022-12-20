import React, {useState, useRef, useEffect} from 'react';
import {Animated, Pressable, ImageBackground} from 'react-native';
import {styles} from './src/styles/app';
import Svg, {Use, Image} from 'react-native-svg';

const App = () => {
  const [isDay, setIsDay] = useState(true);
  const anim = useRef(new Animated.Value(0)).current;
  const background_opacity = useRef(new Animated.Value(0)).current;

  //! box animation start
  useEffect(() => {
    Animated.timing(anim, {
      toValue: isDay ? 0 : 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [isDay, anim]);

  const Sun = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 25],
  });

  const Moon = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [-13, 1],
  });
  //! box animation end

  useEffect(() => {
    Animated.timing(background_opacity, {
      toValue: isDay ? 1 : 0,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [isDay, background_opacity]);

  const night_opacity = background_opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const AnimetedImage = Animated.createAnimatedComponent(ImageBackground);

  //! sun animation start
  const sunAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(sunAnimatedValue, {
      toValue: isDay ? 0 : 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [isDay, sunAnimatedValue]);

  const sunValX = sunAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 250],
  });

  const sunValY = sunAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [360, -30],
  });

  const sun_animation = {
    transform: [
      {
        translateX: sunValX,
      },
      {
        translateY: sunValY,
      },
    ],
  };

  //! sun animation end

  //* cloud animations start
  //! c1 animation start
  const c1AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(c1AnimatedValue, {
      toValue: isDay ? 0 : 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [isDay, c1AnimatedValue]);

  const c1ValX = c1AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [340, -120],
  });

  const c1ValY = c1AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, -20],
  });

  const c1_animation = {
    transform: [
      {
        translateX: c1ValX,
      },
      {
        translateY: c1ValY,
      },
    ],
  };
  //! c1 animation end
  //! c2 animation start
  const c2AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(c1AnimatedValue, {
      toValue: isDay ? 0 : 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [isDay, c1AnimatedValue]);

  const c2ValX = c1AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [180, -90],
  });

  const c2ValY = c1AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 40],
  });

  const c2_animation = {
    transform: [
      {
        translateX: c2ValX,
      },
      {
        translateY: c2ValY,
      },
    ],
  };
  //! c2 animation end
  //! c3 animation start
  const c3AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(c1AnimatedValue, {
      toValue: isDay ? 0 : 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [isDay, c1AnimatedValue]);

  const c3ValX = c1AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [90, -90],
  });

  const c3ValY = c1AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -50],
  });

  const c3_animation = {
    transform: [
      {
        translateX: c3ValX,
      },
      {
        translateY: c3ValY,
      },
    ],
  };
  //! c3 animation end
  //! c4 animation start
  const c4AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(c1AnimatedValue, {
      toValue: isDay ? 0 : 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [isDay, c1AnimatedValue]);

  const c4ValX = c1AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, -90],
  });

  const c4ValY = c1AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 100],
  });

  const c4_animation = {
    transform: [
      {
        translateX: c4ValX,
      },
      {
        translateY: c4ValY,
      },
    ],
  };
  //! c4 animation end
  //! c5 animation start
  const c5AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(c1AnimatedValue, {
      toValue: isDay ? 0 : 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [isDay, c1AnimatedValue]);

  const c5ValX = c1AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [400, -90],
  });

  const c5ValY = c1AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [70, 70],
  });

  const c5_animation = {
    transform: [
      {
        translateX: c5ValX,
      },
      {
        translateY: c5ValY,
      },
    ],
  };
  //! c5 animation end
  //* cloud animations end

  //* night animation start
  //! moon animation start
  const moon_AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(moon_AnimatedValue, {
      toValue: isDay ? 0 : 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [isDay, moon_AnimatedValue]);

  const moon_ValX = moon_AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, 150],
  });

  const moon_ValY = moon_AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [600, 300],
  });

  const moon_animation = {
    transform: [
      {
        translateX: moon_ValX,
      },
      {
        translateY: moon_ValY,
      },
    ],
  };
  //! moon animation end
  //! moon animation start
  const tail_twin_AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(tail_twin_AnimatedValue, {
      toValue: isDay ? 0 : 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [isDay, tail_twin_AnimatedValue]);

  const tail_twin_ValX = tail_twin_AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 70],
  });

  const tail_twin_ValY = tail_twin_AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 350],
  });

  const tail_twin_animation = {
    transform: [
      {
        translateX: tail_twin_ValX,
      },
      {
        translateY: tail_twin_ValY,
      },
    ],
  };
  //! moon animation end
  //* night animation end

  return (
    <AnimetedImage
      style={styles.container}
      resizeMode="contain"
      source={require('./src/assets/scene_night.png')}>
      <AnimetedImage
        style={[styles.container, {opacity: background_opacity}]}
        resizeMode="contain"
        source={require('./src/assets/scene_day.png')}>
        <Animated.Image
          source={require('./src/assets/sun.png')}
          resizeMode="cover"
          style={sun_animation}
        />
        <Animated.Image
          source={require('./src/assets/c1.png')}
          resizeMode="cover"
          style={[{width: 118, height: 29}, c1_animation]}
        />
        <Animated.Image
          source={require('./src/assets/c2.png')}
          resizeMode="cover"
          style={[{width: 32, height: 8}, c2_animation]}
        />
        <Animated.Image
          source={require('./src/assets/c3.png')}
          resizeMode="cover"
          style={[{width: 64, height: 15}, c3_animation]}
        />
        <Animated.Image
          source={require('./src/assets/c4.png')}
          resizeMode="cover"
          style={[{width: 64, height: 15}, c4_animation]}
        />
        <Animated.Image
          source={require('./src/assets/c5.png')}
          resizeMode="cover"
          style={[{width: 49, height: 12}, c5_animation]}
        />
      </AnimetedImage>
      <Pressable
        style={[styles.box, {opacity: 1}]}
        onPress={() => setIsDay(!isDay)}>
        <Animated.View style={[styles.sun, {transform: [{translateX: Sun}]}]}>
          <Animated.View
            style={[styles.shadow, {transform: [{translateX: Moon}]}]}
          />
        </Animated.View>
      </Pressable>
      <Animated.Image
        source={require('./src/assets/moon.png')}
        resizeMode="cover"
        style={[
          {
            width: 40,
            height: 46,
            position: 'absolute',
            opacity: night_opacity,
          },
          moon_animation,
        ]}
      />
      <Animated.Image
        source={require('./src/assets/tail-wind.png')}
        resizeMode="cover"
        style={[
          {
            width: 215,
            height: 138,
            position: 'absolute',
            opacity: night_opacity,
          },
          tail_twin_animation,
        ]}
      />
    </AnimetedImage>
  );
};

export default App;
