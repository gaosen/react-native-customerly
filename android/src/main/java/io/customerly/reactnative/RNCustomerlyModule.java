package io.customerly.reactnative;

/*
 * Copyright (C) 2017 Customerly
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import android.app.Activity;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import io.customerly.Customerly;

public class RNCustomerlyModule extends ReactContextBaseJavaModule {

    public RNCustomerlyModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNCustomerly";
    }

    //Customerly.configure(this, "00s11288");

    @ReactMethod
    public void openSupport() {
        Activity activity = this.getCurrentActivity();
        if(activity != null) {
            Customerly.get().openSupport(activity);
        }
    }
}