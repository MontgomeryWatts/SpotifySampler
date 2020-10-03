<template functional>
  <b-container>
    <b-row>
      <b-card class="shadow my-1">
        <b-media vertical-align="center">
          <template v-slot:aside>
            <b-img-lazy
              src="~/assets/Spotify_Logo_RGB_Green.png"
              height="45"
              width="150"
              alt="Spotify Logo"
            />
          </template>
          <p>
            This site was inspired by Spotify Wrapped, a highly anticipated
            year-end event where Spotify reveals your most listened to artists,
            songs, and genres for the past twelve months.
          </p>
          <p>
            I &mdash; like many &mdash; was confused when I saw genres I've
            never heard of like
            <nuxt-link to="/genres/escape room">escape room</nuxt-link> as one
            of my top 5 genres for the year. What exactly <i>is</i> escape room
            anyways? I had to know.
          </p>
          <p>
            Unfortunately, I couldn't find a concrete definition anywhere. But
            what I <i>could</i> find was other artists that Spotify classified
            as escape room through their
            <a
              href="https://developer.spotify.com/documentation/web-api/"
              target="_blank"
              rel="noreferrer"
              >Web API</a
            >.
          </p>
          <p>
            As I dug deeper into the genres, I had a lot of fun seeing just how
            specific they got with genres or how silly they could be. The two
            best genre names that I've found are
            <nuxt-link to="/genres/kawaii future bass"
              >kawaii future bass</nuxt-link
            >
            and
            <nuxt-link to="/genres/atmospheric doom">atmospheric doom</nuxt-link
            >.
          </p>
          <p>
            Spotify doesn't expose this data in the app, and you can't search by
            genre either. So I decided to make an application.
          </p>
        </b-media>
      </b-card>
      <b-card class="shadow my-1">
        <b-media vertical-align="center">
          <template v-slot:aside>
            <b-img-lazy
              src="~/assets/MongoDB_Logo_FullColorBlack_RGB.svg"
              height="50"
              width="150"
              alt="MongoDB Logo"
            />
          </template>
          <p>
            Music is a highly related domain. Artists belong to genres and have
            albums, albums have tracks, and tracks have featured artists. I
            wanted to be able to grab all of this information in a single
            database query, based only on a genre.
          </p>
          <p>
            I could take the SQL route and set up tables for each entity and
            mapping tables to put it all together.
            <i>Or</i> I could use
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"
              >MongoDB</a
            >
            and model the data to my use case. MongoDB is a NoSQL database that
            stores data in JSON-like documents. By structuring the documents to
            include these one-to-many and many-to-many relationships I can grab
            all the data I need with one simple query.
          </p>
          <p>
            The most common access pattern I pictured was centered around
            artists. I started the project in order to see how Spotify
            classified artists after all! MongoDB makes this easy by letting me
            embed a genre array that I can query. Structuring the data in the
            form it's consumed in makes everything very straightforward.
          </p>
          <p>
            MongoDB also has a feature that I think makes using this site really
            fun, namely the ability to
            <a
              href="https://docs.mongodb.com/manual/reference/operator/aggregation/sample/"
              target="_blank"
              rel="noreferrer"
              >sample</a
            >
            a document. One of my favorite things to do is to see what artists
            come up. Sometimes I'll find interesting album art or a funny album
            name and have to check it out. Be careful when randoming, there
            might be explicit content!
          </p>
          <p>
            For this site I use
            <a
              href="https://www.mongodb.com/cloud/atlas"
              target="_blank"
              rel="noreferrer"
              >MongoDB Atlas</a
            >, MongoDB's cloud database service.
          </p>
        </b-media>
      </b-card>
      <b-card class="shadow my-1">
        <b-media vertical-align="center">
          <template v-slot:aside>
            <b-img-lazy
              src="~/assets/Amazon_Web_Services_Logo.svg"
              height="50"
              width="150"
              alt="AWS Logo"
            />
          </template>
          <p>
            This site is deployed on Amazon Web Services, or
            <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer"
              >AWS</a
            >
            &mdash; Amazon's cloud computing platform. I wanted to get
            meaningful exposure to technologies used by companies working in the
            cloud, and AWS is one of the leading cloud computing providers.
          </p>
          <p>
            <a
              href="https://aws.amazon.com/route53/"
              target="_blank"
              rel="noreferrer"
              >Route53</a
            >
            and
            <a
              href="https://aws.amazon.com/certificate-manager/"
              target="_blank"
              rel="noreferrer"
              >AWS Certificate Manager</a
            >
            (ACM) are the services responsible for the website's domain. Route53
            allows me to give the site a friendly, memorable URL for people to
            visit and ACM ensures that they won't receive security warnings
            prior to entering the site. It's hard to show off a site when web
            browsers advise people to stay away!
          </p>
          <p>
            The services responsible for running the site are
            <a
              href="https://aws.amazon.com/ecs/"
              target="_blank"
              rel="noreferrer"
              >Elastic Container Service</a
            >
            (ECS) and
            <a
              href="https://aws.amazon.com/elasticloadbalancing/"
              target="_blank"
              rel="noreferrer"
              >Elastic Load Balancing</a
            >
            (ELB). ECS runs the
            <a href="https://www.docker.com/" target="_blank" rel="noreferrer"
              >Docker</a
            >
            containers that serve the website and makes database calls to
            MongoDB Atlas. Docker is an awesome technology that helps
            standardize application deployment so there's no need to worry about
            the app working on different machines. If need be, I could migrate
            the site to another cloud provider with little issue! ELB listens
            for requests to the site and routes them to the ECS containers.
            It'll also provision more containers if the site is under heavy
            traffic.
          </p>
          <p>
            Finally, the containers are placed in a
            <a
              href="https://aws.amazon.com/vpc/"
              target="_blank"
              rel="noreferrer"
              >Virtual Private Cloud</a
            >
            (VPC). This locks them down so that the only traffic allowed is to
            the database to retrieve data and from the load balancer to serve
            requests. Although I'm not storing any sensitive data, it's always
            important to follow the principle of least privilege!
          </p>
        </b-media>
      </b-card>
      <b-card class="shadow my-1">
        <b-media vertical-align="center">
          <template v-slot:aside>
            <b-img-lazy
              src="~/assets/Terraform_PrimaryLogo_FullColor_RGB.svg"
              height="100"
              width="150"
              alt="HashiCorp Terraform Logo"
            />
          </template>
          <p>
            As you can see, this site is a multi-cloud solution with an involved
            architecture. Managing all of these services in their respective
            consoles could be unwieldy, and changes can be difficult to track
            &mdash; especially as an application grows. With this in mind, I
            managed the infrastructure with
            <a href="https://www.terraform.io/" target="_blank" rel="noreferrer"
              >Terraform</a
            >, an Infrastructure as Code (IaC) technology to provision cloud
            resources automatically and reliably.
          </p>
          <p>
            By using Terraform, I was able to make predictable changes to my
            infrastructure and treat provisioning new resources like new
            features. With a few console commands, I can stand up identical
            environments for development or testing. You could do it too!
          </p>
        </b-media>
      </b-card>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>
