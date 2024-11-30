<template>
  <div>
    <p>
      <el-form :model="form" ref="form" label-width="150px">
        <el-tabs type="border-card">
          <el-tab-pane :label="$t('home.general')">
            <template v-if="form.roomKeyType === 1">
              <p>
                <el-alert :title="$t('home.useAuthCodeWarning')" type="warning" show-icon :closable="false"></el-alert>
              </p>
              <el-form-item
                :label="$t('home.room')" prop="roomId" :rules="[
                  { required: true, message: $t('home.roomIdEmpty') },
                  { type: 'integer', min: 1, message: $t('home.roomIdInteger') }
                ]"
              >
                <el-row>
                  <el-col :span="6">
                    <el-select v-model="form.roomKeyType" style="width: 100%">
                      <el-option :label="$t('home.authCode')" :value="2"></el-option>
                      <el-option :label="$t('home.roomId')" :value="1"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="18">
                    <el-input v-model.number="form.roomId" type="number" min="1"></el-input>
                  </el-col>
                </el-row>
              </el-form-item>
            </template>

            <el-form-item v-else-if="form.roomKeyType === 2"
              :label="$t('home.room')" prop="authCode" :rules="[
                { required: true, message: $t('home.authCodeEmpty') },
                { pattern: /^[0-9A-Z]{12,14}$/, message: $t('home.authCodeFormatError') }
              ]"
            >
              <el-row>
                <el-col :span="6">
                  <el-select v-model="form.roomKeyType" style="width: 100%">
                    <el-option :label="$t('home.authCode')" :value="2"></el-option>
                    <el-option :label="$t('home.roomId')" :value="1"></el-option>
                  </el-select>
                </el-col>
                <el-col :span="18">
                  <el-tooltip placement="top-start">
                    <div slot="content">
                      <!-- 不知道为什么router-link获取不到$router，还是用el-link了，不过会有一次丑陋的刷新 -->
                      <el-link
                        type="primary" :href="$router.resolve({ name: 'help' }).href"
                      >{{ $t('home.howToGetAuthCode') }}</el-link>
                    </div>
                    <el-input v-model.number="form.authCode"></el-input>
                  </el-tooltip>
                </el-col>
              </el-row>
            </el-form-item>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item>
                    <span slot="label" :title="$t('home.openSpecificTutorial')">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#AEETx" target="_blank">
                        {{$t('home.showDanmaku')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showDanmaku"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="4">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#AEETx" target="_blank">
                        {{$t('home.mergeSimilarDanmaku')}}
                      </a>
                    </span>
                    <el-switch v-model="form.mergeSimilarDanmaku"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#AEETx" target="_blank">
                        {{$t('home.maxNumber')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.maxNumber" type="number" min="1"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item>
                    <span slot="label" :title="$t('home.openSpecificTutorial')">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#z7YQT" target="_blank">
                        {{$t('home.showInteractWordEnter')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showInteractWordEnter"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item>
                    <span slot="label" :title="$t('home.openSpecificTutorial')">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#z7YQT" target="_blank">
                        {{$t('home.showInteractWordFollow')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showInteractWordFollow"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item>
                    <span slot="label" :title="$t('home.openSpecificTutorial')">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#z7YQT" target="_blank">
                        {{$t('home.showInteractWordShare')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showInteractWordShare"></el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#b9gux" target="_blank">
                        {{$t('home.showSuperchat')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showSuperchat"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#b9gux" target="_blank">
                        {{$t('home.showNewMember')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showNewMember"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#b9gux" target="_blank">
                        {{$t('home.showGift')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showGift"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#b9gux" target="_blank">
                        {{$t('home.showGiftInfo')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showGiftInfo"></el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#b9gux" target="_blank">
                        {{$t('home.mergeGift')}}
                      </a>
                    </span>
                    <el-switch v-model="form.mergeGift"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#b9gux" target="_blank">
                        {{$t('home.minGiftPrice')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.minGiftPrice" type="number" min="0" :placeholder="$t('home.minGiftPricePlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#b9gux" target="_blank">
                        {{$t('home.minTickerPrice')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.minTickerPrice" type="number" min="0.1" :placeholder="$t('home.minGiftPricePlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item :label="$t('home.danmakuAtBottom')" :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#BL6aV" target="_blank">
                        {{$t('home.danmakuAtBottom')}}
                      </a>
                    </span>
                    <el-switch v-model="form.danmakuAtBottom"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :label="$t('home.tickerAtButtom')" :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#BL6aV" target="_blank">
                        {{$t('home.tickerAtButtom')}}
                      </a>
                    </span>
                    <el-switch v-model="form.tickerAtButtom"></el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
          </el-tab-pane>

          <el-tab-pane :label="$t('home.special')">
            <el-card shadow="never">
              <el-form-item :title="$t('home.openSpecificTutorial')">
                <span slot="label">
                  <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#adabf3ed" target="_blank">
                    {{$t('home.allowTextColorSetting')}}
                  </a>
                </span>
                <el-switch v-model="form.allowTextColorSetting"></el-switch>
              </el-form-item>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="4">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#28ad9edf" target="_blank">
                        {{$t('home.blockTranslateDanmaku')}}
                      </a>
                    </span>
                    <el-switch v-model="form.blockTranslateDanmaku"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="4">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#28ad9edf" target="_blank">
                        {{$t('home.showTranslateDanmakuOnly')}}
                      </a>
                    </span>
                    <el-switch v-model="form.showTranslateDanmakuOnly"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#28ad9edf" target="_blank">
                        {{$t('home.translationSign')}}
                      </a>
                    </span>
                    <el-input v-model.trim="form.translationSign"
                    maxLength='1'
                    :placeholder="$t('home.onlyOneCharacter')"
                  ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomXOffset')}}
                      </a>
                    </span>
                    <el-switch v-model="form.randomXOffset"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomXRangeMin')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.randomXRangeMin" type="number" :placeholder="$t('home.pixelPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomXRangeMax')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.randomXRangeMax" type="number" :placeholder="$t('home.pixelPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomYOffset')}}
                      </a>
                    </span>
                    <el-switch v-model="form.randomYOffset"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomYRangeMin')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.randomYRangeMin" type="number" :placeholder="$t('home.pixelPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomYRangeMax')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.randomYRangeMax" type="number" :placeholder="$t('home.pixelPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.floatTime')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.floatTime" type="number" min="0" :placeholder="$t('home.timePlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.floatDistanceThreshold')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.floatDistanceThreshold" type="number" min="0" :placeholder="$t('home.pixelPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomXInitialOffset')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.randomXInitialOffset" type="number" :placeholder="$t('home.pixelPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.randomYInitialOffset')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.randomYInitialOffset" type="number" :placeholder="$t('home.pixelPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.floatDistanceXMin')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.floatDistanceXMin" type="number" :placeholder="$t('home.floatDistanceXPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.floatDistanceXMax')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.floatDistanceXMax" type="number" :placeholder="$t('home.floatDistanceXPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.floatDistanceYMin')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.floatDistanceYMin" type="number" :placeholder="$t('home.floatDistanceYPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#dba70408" target="_blank">
                        {{$t('home.floatDistanceYMax')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.floatDistanceYMax" type="number" :placeholder="$t('home.floatDistanceYPlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
          </el-tab-pane>

          <el-tab-pane :label="$t('home.block')">
            <el-row :gutter="20">
              <el-col :xs="24" :sm="8">
                <el-form-item :title="$t('home.openSpecificTutorial')">
                  <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#AtoJ3" target="_blank">
                    {{$t('home.giftDanmaku')}}
                  </a>
                  <el-switch v-model="form.blockGiftDanmaku"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :title="$t('home.openSpecificTutorial')">
                  <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#AtoJ3" target="_blank">
                    {{$t('home.informalUser')}}
                  </a>
                  <el-switch v-model="form.blockNewbie"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :title="$t('home.openSpecificTutorial')">
                  <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#AtoJ3" target="_blank">
                    {{$t('home.unverifiedUser')}}
                  </a>
                  <el-switch v-model="form.blockNotMobileVerified"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="12">
                <el-form-item>
                  <span slot="label" :title="$t('home.openSpecificTutorial')">
                    <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#AtoJ3" target="_blank">
                      {{$t('home.blockLevel')}}
                    </a>
                  </span>
                  <el-slider v-model="form.blockLevel" show-input :min="0" :max="60"></el-slider>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item>
                  <span slot="label" :title="$t('home.openSpecificTutorial')">
                    <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#AtoJ3" target="_blank">
                      {{$t('home.blockMedalLevel')}}
                    </a>
                  </span>
                  <el-slider v-model="form.blockMedalLevel" show-input :min="0" :max="40"></el-slider>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item>
              <span slot="label" :title="$t('home.openSpecificTutorial')">
                <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#AtoJ3" target="_blank">
                  {{$t('home.blockKeywords')}}
                </a>
              </span>
              <el-input v-model="form.blockKeywords" type="textarea" :rows="5" :placeholder="$t('home.onePerLine')"></el-input>
            </el-form-item>
            <el-form-item>
              <span slot="label" :title="$t('home.openSpecificTutorial')">
                <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#AtoJ3" target="_blank">
                  {{$t('home.blockUsers')}}
                </a>
              </span>
              <el-input v-model="form.blockUsers" type="textarea" :rows="5" :placeholder="$t('home.onePerLine')"></el-input>
            </el-form-item>
            <el-form-item>
              <span slot="label" :title="$t('home.openSpecificTutorial')">
                <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#AtoJ3" target="_blank">
                  {{$t('home.blockUsersByKeywords')}}
                </a>
              </span>
              <el-input v-model="form.blockUsersByKeywords" type="textarea" :rows="5" :placeholder="$t('home.onePerLine')"></el-input>
            </el-form-item>
          </el-tab-pane>

          <el-tab-pane :label="$t('home.advanced')">
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#zhyBk" target="_blank">
                        {{$t('home.mergeSameUserDanmaku')}}
                      </a>
                    </span>
                    <el-switch v-model="form.mergeSameUserDanmaku" :disabled="form.autoTranslate"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#zhyBk" target="_blank">
                        {{$t('home.mergeSameUserDanmakuInterval')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.mergeSameUserDanmakuInterval" type="number" min="1"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#fwwLM" target="_blank">
                        {{$t('home.fadeOutNum')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.fadeOutNum" type="number" min="1"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#fwwLM" target="_blank">
                        {{$t('home.pinTime')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.pinTime" type="number" min="1" :placeholder="$t('home.pinTimePlaceholder')"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#PUfUK" target="_blank">
                        {{$t('home.relayMessagesByServer')}}
                      </a>
                    </span>
                    <el-switch v-model="form.relayMessagesByServer"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#PUfUK" target="_blank">
                        {{$t('home.autoTranslate')}}
                      </a>
                    </span>
                    <el-switch v-model="form.autoTranslate" :disabled="!serverConfig.enableTranslate || !form.relayMessagesByServer || form.mergeSameUserDanmaku"></el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-form-item :title="$t('home.openSpecificTutorial')">
              <span slot="label">
                <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#PUfUK" target="_blank">
                  {{$t('home.giftUsernamePronunciation')}}
                </a>
              </span>
              <el-radio-group v-model="form.giftUsernamePronunciation">
                <el-radio label="">{{$t('home.dontShow')}}</el-radio>
                <el-radio label="pinyin">{{$t('home.pinyin')}}</el-radio>
                <el-radio label="kana">{{$t('home.kana')}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane :label="$t('home.emoticon')">
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#147119dc" target="_blank">
                        {{$t('home.autoRenderOfficialSmallEmoji')}}
                      </a>
                    </span>
                    <el-switch v-model="form.autoRenderOfficialSmallEmoji"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#147119dc" target="_blank">
                        {{$t('home.autoRenderOfficialGeneralEmoji')}}
                      </a>
                    </span>
                    <el-switch v-model="form.autoRenderOfficialGeneralEmoji"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#147119dc" target="_blank">
                        {{$t('home.autoRenderStreamerEmoji')}}
                      </a>
                    </span>
                    <el-switch v-model="form.autoRenderStreamerEmoji"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#147119dc" target="_blank">
                        {{$t('home.autoRenderPersonalEmoji')}}
                      </a>
                    </span>
                    <el-switch v-model="form.autoRenderPersonalEmoji"></el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#OIykb" target="_blank">
                        {{$t('home.useLocalEmoticonSetting')}}
                      </a>
                    </span>
                    <el-switch v-model="form.useLocalEmoticonSetting"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#185e7d0c" target="_blank">
                        {{$t('home.isSkipSameImage')}}
                      </a>
                    </span>
                    <el-switch v-model="form.isSkipSameImage"></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="6">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#8337b9f9" target="_blank">
                        {{$t('home.isGreedyMatch')}}
                      </a>
                    </span>
                    <el-switch v-model="form.isGreedyMatch"></el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="12">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#16314229" target="_blank">
                        {{$t('home.imageShowType')}}
                      </a>
                    </span>
                    <el-select ref="imageShowTypeInput" v-model="form.imageShowType">
                      <el-option v-for="imageShowType in $t('home.imageShowTypes')" :key="imageShowType" v-bind:value="imageShowType.id">{{imageShowType.name}}
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="12">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#90180b29" target="_blank">
                        {{$t('home.maxImage')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.maxImage" type="number"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12">
                  <el-form-item :title="$t('home.openSpecificTutorial')">
                    <span slot="label">
                      <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#90180b29" target="_blank">
                        {{$t('home.maxEmoji')}}
                      </a>
                    </span>
                    <el-input v-model.number="form.maxEmoji" type="number"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
            <p>
              <el-button type="primary" icon="el-icon-plus" @click="addEmoticon">{{$t('home.addEmoticon')}}</el-button>
              <el-button type="primary" icon="el-icon-plus" @click="addPicture">{{$t('home.addPicture')}}</el-button>
              <el-button type="danger" icon="el-icon-minus" @click="delAllEmoticon">{{$t('home.delAllEmoticon')}}</el-button>
              <el-button type="primary" @click="exportEmoticonConfig">{{$t('home.exportEmoticonConfig')}}</el-button>
              <el-button type="primary" @click="openSpecificTutorial('https://www.yuque.com/doodle-irifi/ueaigm/laogg2#67902a4a')" style="background: #bed742; border-color: #bed742;">{{$t('home.openTutorial')}}</el-button>
            </p>
            <el-table :data="form.emoticons">
              <el-table-column prop="keyword" width="170" :label="$t('home.emoticonKeyword')">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.keyword"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="url" :label="$t('home.emoticonUrl')">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.url"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="align" width="140" :label="$t('home.emoticonAlign')">
                <template slot-scope="scope">
                  <el-select ref="imageAlignTypeInput" v-model="scope.row.align">
                    <el-option v-for="imageAlignType in $t('home.imageAlignTypes')" :key="imageAlignType" v-bind:value="imageAlignType.id">{{imageAlignType.name}}
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop="level" width="140" :label="$t('home.imageLevel')">
                <template slot-scope="scope">
                  <el-select ref="imageLevelInput" v-model.number="scope.row.level" type="number">
                    <el-option v-for="imageLevel in $t('home.imageLevels')" :key="imageLevel" v-bind:value="imageLevel.id">{{imageLevel.name}}
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop="height" width="170" :label="$t('home.emoticonHeight')">
                <template slot-scope="scope">
                  <el-input v-model.number="scope.row.height" type="number" min="1" max="1000"></el-input>
                </template>
              </el-table-column>
              <el-table-column :label="$t('home.operation')" width="170">
                <template slot-scope="scope">
                  <el-button-group>
                    <el-button type="primary" icon="el-icon-upload2" :disabled="!serverConfig.enableUploadFile"
                      @click="uploadEmoticon(scope.row)"
                    ></el-button>
                    <el-button type="danger" icon="el-icon-minus" @click="delEmoticon(scope.$index)"></el-button>
                  </el-button-group>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane :label="$t('home.testing')">
            <el-row :gutter="20">
              <el-col :xs="24" :sm="12">
                <el-form-item>
                  <span slot="label" :title="$t('home.openSpecificTutorial')">
                    <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#AtoJ3" target="_blank">
                      {{$t('home.minDanmakuInterval')}}
                    </a>
                  </span>
                  <el-slider v-model="form.minDanmakuInterval" show-input :min="35" :max="5000"></el-slider>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item>
                  <span slot="label" :title="$t('home.openSpecificTutorial')">
                    <a href="https://www.yuque.com/doodle-irifi/ueaigm/laogg2#AtoJ3" target="_blank">
                      {{$t('home.maxDanmakuInterval')}}
                    </a>
                  </span>
                  <el-slider v-model="form.maxDanmakuInterval" show-input :min="35" :max="5000"></el-slider>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </p>

    <p>
      <el-card>
        <el-form :model="form" label-width="150px">
          <p v-if="obsRoomUrl.length > 1024">
            <el-alert :title="$t('home.urlTooLong')" type="warning" show-icon :closable="false"></el-alert>
          </p>
          <el-form-item :label="$t('home.roomUrl')">
            <el-input ref="roomUrlInput" readonly :value="obsRoomUrl" style="width: calc(100% - 8em); margin-right: 1em;"></el-input>
            <el-button type="primary" icon="el-icon-copy-document" @click="copyUrl"></el-button>
          </el-form-item>
          <el-form-item :label="$t('home.customCss')">
            <el-input v-model="form.customCss" style="width: calc(100% - 16em); margin-right: 1em;"></el-input>
            <el-button-group>
              <!-- check button -->
                <el-button type="primary" icon="el-icon-check" @click="confirmCustomCSS" style="background: #bed742; border-color: #bed742;"></el-button>
                <el-button type="primary" icon="el-icon-upload2" :disabled="!serverConfig.enableUploadFile"
                  @click="uploadCustomCSS"
                ></el-button>
                <!-- delete css setting -->
                <el-button type="danger" icon="el-icon-minus" @click="deleteCustomCSS"></el-button>
              </el-button-group>
            </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="openTutorial" style="background: #bed742; border-color: #bed742;">{{$t('home.openTutorial')}}</el-button>
            <el-button type="primary" @click="enterBilibili">{{$t('home.enterBilibili')}}</el-button>
            <el-button type="primary" :disabled="!roomUrl" @click="enterRoom">{{$t('home.enterRoom')}}</el-button>
            <el-button @click="enterTestRoom">{{$t('home.enterTestRoom')}}</el-button>
            <el-button @click="exportConfig">{{$t('home.exportConfig')}}</el-button>
            <el-button @click="importConfig">{{$t('home.importConfig')}}</el-button>
            <el-button type="danger" @click="resetConfig">{{$t('home.resetConfig')}}</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </p>
  </div>
</template>

<style>
.el-tab-pane>.el-card {
  border-radius: 8px;
  border: none;
  background-color: none;
}
.el-tab-pane>.el-card:hover {
  background-color: #ebeef5;
}

.el-form-item__label:hover {
    color: #409eff;
}

.el-card__body {
  padding: 20px 20px 4px 20px;
}

a {
  color: #606266;
}
a:hover {
  color: #409eff;
}

.el-message-box__content {
  font-size: 18px;
  font-weight: bold;
}

.del-all-confirm-button:hover {
  background: #f78989;
  border-color: #f78989;
}

.del-all-confirm-button:focus,
.del-all-confirm-button {
  background: #f56c6c;
  border-color: #f56c6c;
}


</style>
<script>
import _ from 'lodash'
import download from 'downloadjs'

import { mergeConfig } from '@/utils'
import * as mainApi from '@/api/main'
import * as chatConfig from '@/api/chatConfig'

export default {
  name: 'Home',
  data() {
    return {
      serverConfig: {
        enableTranslate: true,
        enableUploadFile: true,
        loaderUrl: ''
      },
      form: {
        ...chatConfig.getLocalConfig(),
        roomKeyType: parseInt(window.localStorage.roomKeyType || '2'),
        roomId: parseInt(window.localStorage.roomId || '1'),
        authCode: window.localStorage.authCode || '',
        customCss: window.localStorage.customCss || '',
      },
      // 因为$refs.form.validate是异步的所以不能直接用计算属性
      // getUnvalidatedRoomUrl -> unvalidatedRoomUrl -> updateRoomUrl -> roomUrl
      roomUrl: '',
    }
  },
  computed: {
    roomKeyValue() {
      if (this.form.roomKeyType === 1) {
        return this.form.roomId
      } else {
        return this.form.authCode
      }
    },
    unvalidatedRoomUrl() {
      return this.getUnvalidatedRoomUrl(false)
    },
    obsRoomUrl() {
      if (this.roomUrl === '') {
        return ''
      }
      if (this.serverConfig.loaderUrl === '') {
        return this.roomUrl
      }
      let url = new URL(this.serverConfig.loaderUrl)
      url.searchParams.append('url', this.roomUrl)
      return url.href
    }
  },
  watch: {
    unvalidatedRoomUrl: 'updateRoomUrl',
    roomUrl: _.debounce(function() {
      window.localStorage.roomKeyType = this.form.roomKeyType
      window.localStorage.roomId = this.form.roomId
      window.localStorage.authCode = this.form.authCode
      window.localStorage.customCss = this.form.customCss
      chatConfig.setLocalConfig(this.form)
    }, 500)
  },
  mounted() {
    this.updateServerConfig()
    this.updateRoomUrl()
  },
  methods: {
    async updateServerConfig() {
      try {
        this.serverConfig = (await mainApi.getServerInfo()).config
      } catch (e) {
        this.$message.error(`Failed to fetch server information: ${e}`)
        throw e
      }
    },
    async updateRoomUrl() {
      // 防止切换roomKeyType时校验的还是老规则
      await this.$nextTick()
      try {
        await this.$refs.form.validate()
      } catch {
        this.roomUrl = ''
        return
      }
      // 没有异步的校验规则，应该不需要考虑竞争条件
      this.roomUrl = this.unvalidatedRoomUrl
    },

    enterBilibili() {
      window.open(`https://live.bilibili.com/${this.form.roomId}`, '_blank')
    },
    openTutorial() {
      window.open(`https://www.yuque.com/doodle-irifi/ueaigm/laogg2`, '_blank')
    },
    openSpecificTutorial(url) {
      window.open(url, '_blank')
    },
    addEmoticon() {
      this.form.emoticons.splice(0, 0, {
        keyword: '[emoji_keyword]',
        align: 'inline',
        level: 0,
        height: 16,
        url: '\\emoticons\\'
      })
    },

    addPicture() {
      this.form.emoticons.splice(0, 0, {
        keyword: '[pic_keyword]',
        align: 'block',
        level: 0,
        height: 64,
        url: '\\emoticons\\'
      })
    },

    delEmoticon(index) {
      this.form.emoticons.splice(index, 1)
    },
    delAllEmoticon() {
      this.$confirm('确定删除所有表情包吗 ?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        confirmButtonClass: 'del-all-confirm-button'
      })
        .then(() => {
          this.form.emoticons.splice(0)
        })
        .catch(() => {})
    },
    uploadEmoticon(emoticon) {
      let input = document.createElement('input')
      input.type = 'file'
      input.accept = 'image/png, image/jpeg, image/jpg, image/gif'
      input.onchange = async() => {
        let file = input.files[0]
        if (file.size > 1024 * 1024) {
          this.$message.error(this.$t('home.emoticonFileTooLarge'))
          return
        }

        let res
        try {
          res = await mainApi.uploadEmoticon(file)
        } catch (e) {
          this.$message.error(`Failed to upload: ${e}`)
          throw e
        }
        emoticon.url = res.url
      }
      input.click()
    },
    confirmCustomCSS() {
      window.localStorage.customCss = this.form.customCss
      chatConfig.setLocalConfig(this.form)
    },
    uploadCustomCSS() {
      let input = document.createElement('input')
      input.type = 'file'
      input.accept = 'text/css'
      input.onchange = async() => {
        let file = input.files[0]
        if (file.size > 10240 * 10240 * 3) { // 300MB
          this.$message.error(this.$t('home.cssFileTooLarge'))
          return
        }

        let res
        try {
          res = await mainApi.uploadCustomCSS(file)
        } catch (e) {
          this.$message.error(`Failed to upload: ${e}`)
          throw e
        }
        this.form.customCss = res.url
        window.localStorage.customCss = this.form.customCss
        chatConfig.setLocalConfig(this.form)
      }
      input.click()
    },
    deleteCustomCSS() {
      this.$confirm('确定删除自定义CSS吗 ?你可以在 blivechat/data/custom_css 找到你上传的 CSS', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        confirmButtonClass: 'del-all-confirm-button'
      })
        .then(() => {
          this.form.customCss = ''
          window.localStorage.customCss = this.form.customCss
          chatConfig.setLocalConfig(this.form)
        })
        .catch(() => {})
    },
    enterRoom() {
      window.open(this.roomUrl, `room ${this.roomKeyValue}`, 'menubar=0,location=0,scrollbars=0,toolbar=0,width=600,height=600')
    },
    enterTestRoom() {
      window.open(this.getUnvalidatedRoomUrl(true), 'test room', 'menubar=0,location=0,scrollbars=0,toolbar=0,width=600,height=600')
    },
    getUnvalidatedRoomUrl(isTestRoom) {
      // 重要的字段放在前面，因为如果被截断就连接不了房间了
      let frontFields = {
        roomKeyType: this.form.roomKeyType
      }
      let backFields = {
        lang: this.$i18n.locale,
      }
      let ignoredNames = new Set(['roomId', 'authCode'])
      if (this.form.useLocalEmoticonSetting === true) {
        ignoredNames.add('emoticons')
      } else {
        backFields.emoticons = JSON.stringify(this.form.emoticons)
      }
      let query = { ...frontFields }
      for (let name in this.form) {
        if (!(name in frontFields || name in backFields || ignoredNames.has(name))) {
          query[name] = this.form[name]
        }
      }

      Object.assign(query, backFields)

      // 去掉和默认值相同的字段，缩短URL长度
      query = Object.fromEntries(Object.entries(query).filter(
        ([name, value]) => {
          let defaultValue = chatConfig.DEFAULT_CONFIG[name]
          if (defaultValue === undefined) {
            return true
          }
          if (typeof defaultValue === 'object') {
            defaultValue = JSON.stringify(defaultValue)
          }
          return value !== defaultValue
        }
      ))
      

      let resolved
      if (isTestRoom) {
        resolved = this.$router.resolve({ name: 'test_room', query })
      } else {
        resolved = this.$router.resolve({ name: 'room', params: { roomKeyValue: this.roomKeyValue }, query })
      }
      return `${window.location.protocol}//${window.location.host}${resolved.href}`
    },
    copyUrl() {
      this.$refs.roomUrlInput.select()
      document.execCommand('Copy')
    },
    resetConfig() {
      this.$confirm('确定重置配置吗 ?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        confirmButtonClass: 'del-all-confirm-button'
      })
        .then(() => {
          let cfg = {
            ...chatConfig.deepCloneDefaultConfig(),
            roomKeyType: this.form.roomKeyType ? this.form.roomKeyType : '2',
            roomId: this.form.roomId ? this.form.roomId : '1',
            authCode: this.form.authCode ? this.form.authCode : '',
          }
          chatConfig.sanitizeConfig(cfg)
          this.form = cfg
        })
        .catch(() => {})
    },
    exportConfig() {
      let cfg = mergeConfig(this.form, chatConfig.DEFAULT_CONFIG)
      download(JSON.stringify(cfg, null, 2), 'blivechat.json', 'application/json')
    },
    exportEmoticonConfig() {
      download(JSON.stringify(this.form.emoticons, null, 2), 'emoticons.json', 'application/json')
    },
    importConfig() {
      let input = document.createElement('input')
      input.type = 'file'
      input.accept = 'application/json'
      input.onchange = () => {
        let reader = new window.FileReader()
        reader.onload = () => {
          let cfg
          try {
            cfg = JSON.parse(reader.result)
          } catch (e) {
            this.$message.error(this.$t('home.failedToParseConfig') + e)
            return
          }
          this.importConfigFromObj(cfg)
        }
        reader.readAsText(input.files[0])
      }
      input.click()
    },
    importConfigFromObj(cfg) {
      cfg = mergeConfig(cfg, chatConfig.deepCloneDefaultConfig())
      chatConfig.sanitizeConfig(cfg)
      this.form = {
        ...cfg,
        roomKeyType: this.form.roomKeyType,
        roomId: this.form.roomId,
        authCode: this.form.authCode
      }
    }
  }
}
</script>
