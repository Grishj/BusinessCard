import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function App() {
  const onContact = () => {
    Linking.openURL("mailto:joshigrish058@gmail.com");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={{
                uri: "https://cdn.dribbble.com/userupload/6508149/file/original-c4197a5bf25a4356aa2bac6f82073eb2.jpg?resize=752x&vertical=center",
              }}
              style={styles.imageURL}
            />
            <Image source={require("./assets/pic.png")} style={styles.image} />
            <Text style={styles.text}>Grish Joshi</Text>
            <Text>React Native App Developer</Text>
            <View style={styles.logoContainer}>
              <AntDesign name="github" size={24} color="black" />
              <AntDesign name="linkedin-square" size={24} color="black" />
              <AntDesign name="youtube" size={24} color="black" />
            </View>
            {/* //create a button using TouchableOpacity */}
            <TouchableOpacity
              onPress={onContact}
              style={{
                backgroundColor: "#007AFF",
                padding: 10,
                borderRadius: 5,
                marginBottom: 20,
                elevation: 2,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Contact Me
              </Text>
            </TouchableOpacity>
            <Text style={styles.text}>Bio </Text>
            <Text style={{ padding: 20, textAlign: "justify" }}>
              Grish Joshi is a passionate learner and developer from Nepal, with
              a strong interest in software development, mobile app development,
              backend engineering, QA automation, DevOps, and data structures &
              algorithms. He has hands-on experience in building full-stack
              applications using: Frontend: React Native (with Expo) for mobile
              app development, modern UI design, and state management (including
              tools like Zustand). Backend: Node.js with Express, PostgreSQL
              (with and without Prisma), and MongoDB. DevOps: Docker for
              containerization, GitLab CI/CD for automation, and deployment
              strategies. QA Automation: Java-based test automation, with a
              focus on daily practice projects to strengthen end-to-end testing
              skills. Key Projects & Learning Journey Built an Expense Tracker
              App (React Native + Node.js + PostgreSQL + Prisma). Built a Home
              Service On-demand App (similar to UrbanClap/Home Solutions).
              Currently working on a Medicine Reminder App with features like
              reminders, notifications, history logs, stock tracking, and cloud
              sync. Explored a Testbook-like Quiz App, including onboarding,
              quiz screens, results, leaderboards, and modern UI. Learning
              DevOps with Docker by creating full projects, covering images,
              networking, volumes, Docker Compose, and CI/CD. Learning QA
              Automation Engineering with Java, practicing one project per day
              for 30 days. Strengthening Data Structures & Algorithms with
              Python, especially sorting algorithms and core concepts. Core
              Skills Languages: JavaScript, TypeScript, Java, Python. Mobile
              Development: React Native (Expo), UI/UX best practices, navigation
              & caching. Backend Development: Node.js, Express, PostgreSQL,
              Prisma, MongoDB. DevOps & Tools: Docker, GitHub, GitLab CI/CD,
              containerization concepts. QA Automation: Test automation
              frameworks in Java. CS Fundamentals: Data Structures & Algorithms
              with Python. Learning Style Grish loves learning by practicing.
              Instead of just reading theory, he focuses on daily hands-on
              projects to master new technologies. For example, in his QA
              Automation learning path, he does one project per day for 30 days,
              and in Docker, he practices each command by building a real app
              step by step. Vision Grish aims to become a well-rounded software
              engineer with strong skills in: App Development (Mobile & Web)
              Backend Systems & Databases QA Automation DevOps & Cloud Computer
              Science Fundamentals (DSA, Algorithms, Problem Solving)
            </Text>
            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 20,
    marginTop: -76,
  },
  imageURL: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderBottomEndRadius: 20,
  },
  logoContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 30,
    marginVertical: 10,
  },
});
